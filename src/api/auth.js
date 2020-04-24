/*
--------------------------------------------------------------------------
 Auth
--------------------------------------------------------------------------
*/

import API from './config';

export function authUser(email, password) {
  return API({
    method: 'post',
    url: '/auth/login/',
    data: {
      email,
      password
    }
  });
}

export function registerUser(
  firstName,
  lastName,
  email,
  password,
  phone,
  name,
  state,
  city,
  rfc,
  website,
  weeklyDeliveries,
  referredBy
) {
  return API({
    method: 'post',
    url: '/auth/signup/',
    data: {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone,
      company: {
        name,
        state,
        city,
        rfc,
        website,
        weekly_deliveries_number: weeklyDeliveries,
        referred_by: referredBy
      }
    }
  });
}

export function getUserProfile() {
  return API({
    method: 'get',
    url: '/auth/me'
  });
}

export function refreshToken(refreshToken) {
  return API({
    method: 'post',
    url: '/auth/refresh/',
    data: {
      refresh: refreshToken
    }
  });
}

export function recoverPassword(email) {
  return API({
    method: 'post',
    url: '/auth/recover_password/',
    data: {
      email
    }
  });
}

export function changePassword(currentPassword, newPassword) {
  return API({
    method: 'post',
    url: '/auth/change_password/',
    data: {
      current_password: currentPassword,
      new_password: newPassword
    }
  });
}

export function validateToken(token) {
  return API({
    method: 'get',
    url: `/auth/recover_password/${token}`
  });
}

export function resetPassword(token, password) {
  return API({
    method: 'post',
    url: `/auth/recover_password/${token}/`,
    data: {
      password
    }
  });
}
