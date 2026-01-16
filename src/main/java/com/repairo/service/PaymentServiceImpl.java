package com.repairo.service;

import com.repairo.model.Payment;
import com.repairo.repository.PaymentRepository;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

 @Override
public Payment initiatePayment(Payment payment) {

    if ("COD".equalsIgnoreCase(payment.getPaymentMethod())) {
        payment.setStatus("PENDING");   // COD = pay later
    } else {
        payment.setStatus("SUCCESS");   // Online payment success
    }

    return paymentRepository.save(payment);
}
}

