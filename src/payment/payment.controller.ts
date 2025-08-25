import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DetailsDto } from './dtos/payment.dto';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {

    constructor(private readonly paymentSevice: PaymentService){}

    @Post()
    initialPayment(@Body() paymentDetails: DetailsDto){
        return this.paymentSevice.InitializePayment(paymentDetails)
    }

    @Get(':id')
    retrieveStatus(@Param('id') id: string ){
        return this.paymentSevice.RetrievePaymentStatus(id)
    }
}
