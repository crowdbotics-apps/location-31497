import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_verificationcode_list = createAsyncThunk(
  "verificationCodes/api_v1_verificationcode_list",
  async payload => {
    const response = await apiService.api_v1_verificationcode_list(payload)
    return response.data
  }
)
export const api_v1_verificationcode_create = createAsyncThunk(
  "verificationCodes/api_v1_verificationcode_create",
  async payload => {
    const response = await apiService.api_v1_verificationcode_create(payload)
    return response.data
  }
)
export const api_v1_verificationcode_read = createAsyncThunk(
  "verificationCodes/api_v1_verificationcode_read",
  async payload => {
    const response = await apiService.api_v1_verificationcode_read(payload)
    return response.data
  }
)
export const api_v1_verificationcode_update = createAsyncThunk(
  "verificationCodes/api_v1_verificationcode_update",
  async payload => {
    const response = await apiService.api_v1_verificationcode_update(payload)
    return response.data
  }
)
export const api_v1_verificationcode_partial_update = createAsyncThunk(
  "verificationCodes/api_v1_verificationcode_partial_update",
  async payload => {
    const response = await apiService.api_v1_verificationcode_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_verificationcode_delete = createAsyncThunk(
  "verificationCodes/api_v1_verificationcode_delete",
  async payload => {
    const response = await apiService.api_v1_verificationcode_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const verificationCodesSlice = createSlice({
  name: "verificationCodes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_verificationcode_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_verificationcode_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_verificationcode_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_verificationcode_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_verificationcode_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_verificationcode_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_verificationcode_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_verificationcode_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_verificationcode_list,
  api_v1_verificationcode_create,
  api_v1_verificationcode_read,
  api_v1_verificationcode_update,
  api_v1_verificationcode_partial_update,
  api_v1_verificationcode_delete,
  slice: verificationCodesSlice
}
