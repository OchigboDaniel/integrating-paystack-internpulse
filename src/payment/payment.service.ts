import { Injectable } from '@nestjs/common';
import { DetailsDto } from './dtos/payment.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentService {
    constructor(
        private configService: ConfigService
    ){}
    
    
    public async InitializePayment(payload: DetailsDto){
        const url = "https://api.paystack.co/transaction/initialize";
        const secreteKey = this.configService.get<string>('SECRETE_KEY')
        console.log(secreteKey)

        try {
            const response = await axios.post(url, payload, {
            headers: {
                        Authorization: `Bearer ${secreteKey}`,  // forward Authorization header
                        'Content-Type': 'application/json',   
                     },
                    });
            return response.data
        } catch (error) {
            console.log('Error making POST request:', error.message)
            throw error            
        }

    }

    public async RetrievePaymentStatus(id:string){
        const url = `https://api.paystack.co/transaction/verify/${id}`

        try {
            const response = await axios.get(
                url,{
                headers: {
                        Authorization: 'Bearer sk_test_ea94e95c2d48f36af5904fb8f5ecd7c8c97381ba',  // forward Authorization header
                     },
                    }
                )
            return response.data;         
        } catch (error) {
            console.error('Error verifying payment:', error.message);
            throw error            
        }

        
    

    }

}
