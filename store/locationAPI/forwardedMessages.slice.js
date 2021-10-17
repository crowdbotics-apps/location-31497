import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_forwardedmessage_list = createAsyncThunk(
  "forwardedMessages/api_v1_forwardedmessage_list",
  async payload => {
    const response = await apiService.api_v1_forwardedmessage_list(payload)
    return response.data
  }
)
export const api_v1_forwardedmessage_create = createAsyncThunk(
  "forwardedMessages/api_v1_forwardedmessage_create",
  async payload => {
    const response = await apiService.api_v1_forwardedmessage_create(payload)
    return response.data
  }
)
export const api_v1_forwardedmessage_read = createAsyncThunk(
  "forwardedMessages/api_v1_forwardedmessage_read",
  async payload => {
    const response = await apiService.api_v1_forwardedmessage_read(payload)
    return response.data
  }
)
export const api_v1_forwardedmessage_update = createAsyncThunk(
  "forwardedMessages/api_v1_forwardedmessage_update",
  async payload => {
    const response = await apiService.api_v1_forwardedmessage_update(payload)
    return response.data
  }
)
export const api_v1_forwardedmessage_partial_update = createAsyncThunk(
  "forwardedMessages/api_v1_forwardedmessage_partial_update",
  async payload => {
    const response = await apiService.api_v1_forwardedmessage_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_forwardedmessage_delete = createAsyncThunk(
  "forwardedMessages/api_v1_forwardedmessage_delete",
  async payload => {
    const response = await apiService.api_v1_forwardedmessage_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const forwardedMessagesSlice = createSlice({
  name: "forwardedMessages",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_forwardedmessage_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_forwardedmessage_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_forwardedmessage_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_forwardedmessage_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_forwardedmessage_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_forwardedmessage_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_forwardedmessage_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_forwardedmessage_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_forwardedmessage_list,
  api_v1_forwardedmessage_create,
  api_v1_forwardedmessage_read,
  api_v1_forwardedmessage_update,
  api_v1_forwardedmessage_partial_update,
  api_v1_forwardedmessage_delete,
  slice: forwardedMessagesSlice
}
