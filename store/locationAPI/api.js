import axios from "axios"
const locationAPI = axios.create({
  baseURL: "https://location-31497-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_contact_list(payload) {
  return locationAPI.get(`/api/v1/contact/`)
}
function api_v1_contact_create(payload) {
  return locationAPI.post(`/api/v1/contact/`, payload.data)
}
function api_v1_contact_read(payload) {
  return locationAPI.get(`/api/v1/contact/${payload.id}/`)
}
function api_v1_contact_update(payload) {
  return locationAPI.put(`/api/v1/contact/${payload.id}/`, payload.data)
}
function api_v1_contact_partial_update(payload) {
  return locationAPI.patch(`/api/v1/contact/${payload.id}/`, payload.data)
}
function api_v1_contact_delete(payload) {
  return locationAPI.delete(`/api/v1/contact/${payload.id}/`)
}
function api_v1_customtext_list(payload) {
  return locationAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_create(payload) {
  return locationAPI.post(`/api/v1/customtext/`, payload.data)
}
function api_v1_customtext_read(payload) {
  return locationAPI.get(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_customtext_update(payload) {
  return locationAPI.put(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_partial_update(payload) {
  return locationAPI.patch(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_delete(payload) {
  return locationAPI.delete(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_forwardedmessage_list(payload) {
  return locationAPI.get(`/api/v1/forwardedmessage/`)
}
function api_v1_forwardedmessage_create(payload) {
  return locationAPI.post(`/api/v1/forwardedmessage/`, payload.data)
}
function api_v1_forwardedmessage_read(payload) {
  return locationAPI.get(`/api/v1/forwardedmessage/${payload.id}/`)
}
function api_v1_forwardedmessage_update(payload) {
  return locationAPI.put(
    `/api/v1/forwardedmessage/${payload.id}/`,
    payload.data
  )
}
function api_v1_forwardedmessage_partial_update(payload) {
  return locationAPI.patch(
    `/api/v1/forwardedmessage/${payload.id}/`,
    payload.data
  )
}
function api_v1_forwardedmessage_delete(payload) {
  return locationAPI.delete(`/api/v1/forwardedmessage/${payload.id}/`)
}
function api_v1_homepage_list(payload) {
  return locationAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_create(payload) {
  return locationAPI.post(`/api/v1/homepage/`, payload.data)
}
function api_v1_homepage_read(payload) {
  return locationAPI.get(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_homepage_update(payload) {
  return locationAPI.put(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_partial_update(payload) {
  return locationAPI.patch(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_delete(payload) {
  return locationAPI.delete(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return locationAPI.post(`/api/v1/login/`)
}
function api_v1_message_list(payload) {
  return locationAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(payload) {
  return locationAPI.post(`/api/v1/message/`, payload.data)
}
function api_v1_message_read(payload) {
  return locationAPI.get(`/api/v1/message/${payload.id}/`)
}
function api_v1_message_update(payload) {
  return locationAPI.put(`/api/v1/message/${payload.id}/`, payload.data)
}
function api_v1_message_partial_update(payload) {
  return locationAPI.patch(`/api/v1/message/${payload.id}/`, payload.data)
}
function api_v1_message_delete(payload) {
  return locationAPI.delete(`/api/v1/message/${payload.id}/`)
}
function api_v1_messageaction_list(payload) {
  return locationAPI.get(`/api/v1/messageaction/`)
}
function api_v1_messageaction_create(payload) {
  return locationAPI.post(`/api/v1/messageaction/`, payload.data)
}
function api_v1_messageaction_read(payload) {
  return locationAPI.get(`/api/v1/messageaction/${payload.id}/`)
}
function api_v1_messageaction_update(payload) {
  return locationAPI.put(`/api/v1/messageaction/${payload.id}/`, payload.data)
}
function api_v1_messageaction_partial_update(payload) {
  return locationAPI.patch(`/api/v1/messageaction/${payload.id}/`, payload.data)
}
function api_v1_messageaction_delete(payload) {
  return locationAPI.delete(`/api/v1/messageaction/${payload.id}/`)
}
function api_v1_profile_list(payload) {
  return locationAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return locationAPI.post(`/api/v1/profile/`, payload.data)
}
function api_v1_profile_read(payload) {
  return locationAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return locationAPI.put(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_partial_update(payload) {
  return locationAPI.patch(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_delete(payload) {
  return locationAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return locationAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_thread_list(payload) {
  return locationAPI.get(`/api/v1/thread/`)
}
function api_v1_thread_create(payload) {
  return locationAPI.post(`/api/v1/thread/`, payload.data)
}
function api_v1_thread_read(payload) {
  return locationAPI.get(`/api/v1/thread/${payload.id}/`)
}
function api_v1_thread_update(payload) {
  return locationAPI.put(`/api/v1/thread/${payload.id}/`, payload.data)
}
function api_v1_thread_partial_update(payload) {
  return locationAPI.patch(`/api/v1/thread/${payload.id}/`, payload.data)
}
function api_v1_thread_delete(payload) {
  return locationAPI.delete(`/api/v1/thread/${payload.id}/`)
}
function api_v1_threadaction_list(payload) {
  return locationAPI.get(`/api/v1/threadaction/`)
}
function api_v1_threadaction_create(payload) {
  return locationAPI.post(`/api/v1/threadaction/`, payload.data)
}
function api_v1_threadaction_read(payload) {
  return locationAPI.get(`/api/v1/threadaction/${payload.id}/`)
}
function api_v1_threadaction_update(payload) {
  return locationAPI.put(`/api/v1/threadaction/${payload.id}/`, payload.data)
}
function api_v1_threadaction_partial_update(payload) {
  return locationAPI.patch(`/api/v1/threadaction/${payload.id}/`, payload.data)
}
function api_v1_threadaction_delete(payload) {
  return locationAPI.delete(`/api/v1/threadaction/${payload.id}/`)
}
function api_v1_threadmember_list(payload) {
  return locationAPI.get(`/api/v1/threadmember/`)
}
function api_v1_threadmember_create(payload) {
  return locationAPI.post(`/api/v1/threadmember/`, payload.data)
}
function api_v1_threadmember_read(payload) {
  return locationAPI.get(`/api/v1/threadmember/${payload.id}/`)
}
function api_v1_threadmember_update(payload) {
  return locationAPI.put(`/api/v1/threadmember/${payload.id}/`, payload.data)
}
function api_v1_threadmember_partial_update(payload) {
  return locationAPI.patch(`/api/v1/threadmember/${payload.id}/`, payload.data)
}
function api_v1_threadmember_delete(payload) {
  return locationAPI.delete(`/api/v1/threadmember/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return locationAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return locationAPI.post(`/api/v1/user/`, payload.data)
}
function api_v1_user_read(payload) {
  return locationAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return locationAPI.put(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_partial_update(payload) {
  return locationAPI.patch(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_delete(payload) {
  return locationAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_verificationcode_list(payload) {
  return locationAPI.get(`/api/v1/verificationcode/`)
}
function api_v1_verificationcode_create(payload) {
  return locationAPI.post(`/api/v1/verificationcode/`, payload.data)
}
function api_v1_verificationcode_read(payload) {
  return locationAPI.get(`/api/v1/verificationcode/${payload.id}/`)
}
function api_v1_verificationcode_update(payload) {
  return locationAPI.put(
    `/api/v1/verificationcode/${payload.id}/`,
    payload.data
  )
}
function api_v1_verificationcode_partial_update(payload) {
  return locationAPI.patch(
    `/api/v1/verificationcode/${payload.id}/`,
    payload.data
  )
}
function api_v1_verificationcode_delete(payload) {
  return locationAPI.delete(`/api/v1/verificationcode/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return locationAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return locationAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return locationAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return locationAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return locationAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return locationAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return locationAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return locationAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_read(payload) {
  return locationAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return locationAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return locationAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_contact_list,
  api_v1_contact_create,
  api_v1_contact_read,
  api_v1_contact_update,
  api_v1_contact_partial_update,
  api_v1_contact_delete,
  api_v1_customtext_list,
  api_v1_customtext_create,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_customtext_delete,
  api_v1_forwardedmessage_list,
  api_v1_forwardedmessage_create,
  api_v1_forwardedmessage_read,
  api_v1_forwardedmessage_update,
  api_v1_forwardedmessage_partial_update,
  api_v1_forwardedmessage_delete,
  api_v1_homepage_list,
  api_v1_homepage_create,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_homepage_delete,
  api_v1_login_create,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_messageaction_list,
  api_v1_messageaction_create,
  api_v1_messageaction_read,
  api_v1_messageaction_update,
  api_v1_messageaction_partial_update,
  api_v1_messageaction_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_signup_create,
  api_v1_thread_list,
  api_v1_thread_create,
  api_v1_thread_read,
  api_v1_thread_update,
  api_v1_thread_partial_update,
  api_v1_thread_delete,
  api_v1_threadaction_list,
  api_v1_threadaction_create,
  api_v1_threadaction_read,
  api_v1_threadaction_update,
  api_v1_threadaction_partial_update,
  api_v1_threadaction_delete,
  api_v1_threadmember_list,
  api_v1_threadmember_create,
  api_v1_threadmember_read,
  api_v1_threadmember_update,
  api_v1_threadmember_partial_update,
  api_v1_threadmember_delete,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_read,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_delete,
  api_v1_verificationcode_list,
  api_v1_verificationcode_create,
  api_v1_verificationcode_read,
  api_v1_verificationcode_update,
  api_v1_verificationcode_partial_update,
  api_v1_verificationcode_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
