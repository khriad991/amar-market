import {PrismaClient} from '@prisma/client'
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import {Profiler} from "react";

// create invoice list



export const GET = async (req, res) => {
    try {
        // step :1-->> select user_id & User_Email
        let headerList = headers();
        let user_id = parseInt(headerList.get("id"));
        let cus_email =headerList.get("email");
        let prisma = new PrismaClient();

    //     === step: 2 -->> Calculate Total Payable & Vat =============================
        const cartProduct = await prisma.product_carts.findMany({
            where:{user_id},
            include:{products:true}
        })
        let totalAmaount = 0
        cartProduct.forEach((element)=>{
            let price;
            if(element['products']['discount']){
                price = element['products']['discount_price']
            } else {
                price = element['products']['price']
            }
            totalAmaount += element['qty'] * price;
        })
        let vat = totalAmaount * 0.05 // 5% vat
        let payable = totalAmaount + vat

        // === step: 3 -- > prepare Customer details &  Shipping Details ==================
        let profile = await  prisma.customer_profiles.findUnique({where:{user_id}})
         let cus_details = `Name: ${profile['cus_name']}, Email: ${cus_email}, Address: ${Profiler['cus_add']}, Phone: ${profile['cus_phone']}`
        let ship_details = `Name: ${profile['ship_name']}, Email: ${cus_email}, Address: ${profile['ship_add']}, Phone: ${profile['ship_phone']}`

        // ==== step: 4 --- >> Transaction & other ID ==========================
        let tran_id = (Math.floor(10000000 + Math.random() * 90000000)).toString();
        let val_id = "0"
        let delivery_status = 'Pending';
        let payment_status = "Pending";

        /// step: 5 ---- >>> create Invoice List ===========================
        let createInvoice = await prisma.invoices.create({
            data:{
                total:totalAmaount,
                vat,
                payable,
                cus_details,
                ship_details,
                tran_id,
                val_id,
                delivery_status,
                payment_status,
                user_id
            }
        })

        // step: 6 b--->>> Create Invoice Products ===========================
        let invoice_id = createInvoice['id'];
        for(const element of cartProduct){
            await prisma.invoice_products.create({
                data:{
                    invoice_id,
                    product_id:element['product_id'],
                    user_id,
                    qty:element['qty'],
                    sale_price:element['products']['discount']?element['products']['discount_price']:element['products']['price'],
                    color:element['color'],
                    size:element["size"]
                }})
        }

        // step: 7 b---->>> remove cart Product    =============================
        await prisma.product_carts.deleteMany({where:{user_id}});

        // step: 8 ----->>> Prepare SSL details ===============================
        let PaymentSettings = await  prisma.sslcommerz_accounts.findFirst();
        const from = new FormData();
            // account details
        from.append("store_id",PaymentSettings['store_id'] );
        from.append("store_passwd",PaymentSettings['store_passwd']);
        from.append("total_amount",payable.toString());
        from.append("currency",PaymentSettings['currency']);
        from.append("tran_id",`${tran_id}`);
        // payment details
        from.append('success_url',`${PaymentSettings['success_url']}?tran_id=${tran_id}`);
        from.append('fail_url',`${PaymentSettings["fail_url"]}?tran_id=${tran_id}`);
        from.append('cancel_url',`${PaymentSettings['cancel_url']}?tran_id=${tran_id}`);
        from.append('ipn_url',`[${PaymentSettings['ipn_url']}?tran_id=${tran_id}]`);
        // customer details append ------->>>
        from.append('cus_name',profile['cus_name']);
        from.append("cus_email",cus_email);
        from.append("cus_add1",profile['cus_add']);
        from.append("cus_add2",profile['cus_add']);
        from.append("cus_city",profile['cus_city']);
        from.append("cus_state",profile['cus_state']);
        from.append("cus_postcode",profile['cus_postcode']);
        from.append("cus_country",profile['cus_country']);
        from.append("cus_phone",profile['cus_phone']);
        from.append("cus_fax",profile['cus_fax']);
        // append shipping Details --------------
        from.append("shipping_method",'YES');
        from.append("ship_name",profile['ship_name']);
        from.append("ship_add1",profile['ship-add']);
        from.append("ship_add2",profile['ship-add']);
        from.append("ship_city",profile['ship_city']);
        from.append("ship_state",profile["ship_state"]);
        from.append("ship_country",profile['ship_country']);
        from.append("ship_postcode",profile['ship_postcode']);
        // product details -----------
        from.append("product_name","According to invoice");
        from.append("product_category","According to invoice");
        from.append("product_profile","According to invoice");
        from.append("product_amount","According to invoice");
        let SSLRes = await fetch(PaymentSettings['init_url'],{
            method:"POST",
            body:from,
            }
        )
        let SSLJson = await SSLRes.json();

        return NextResponse.json({status:"success",data:SSLJson})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}