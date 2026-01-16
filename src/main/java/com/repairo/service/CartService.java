package com.repairo.service;

import com.repairo.model.CartItem;

import java.util.List;

public interface CartService {

    CartItem addToCart(CartItem item);

    List<CartItem> getUserCart(Long userId);

    void clearCart(Long userId);
}
