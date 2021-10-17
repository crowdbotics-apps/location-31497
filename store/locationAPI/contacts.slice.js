import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_contact_list = createAsyncThunk(
  "contacts/api_v1_contact_list",
  async payload => {
    const response = await apiService.api_v1_contact_list(payload)
    return response.data
  }
)
export const api_v1_contact_create = createAsyncThunk(
  "contacts/api_v1_contact_create",
  async payload => {
    const response = await apiService.api_v1_contact_create(payload)
    return response.data
  }
)
export const api_v1_contact_read = createAsyncThunk(
  "contacts/api_v1_contact_read",
  async payload => {
    const response = await apiService.api_v1_contact_read(payload)
    return response.data
  }
)
export const api_v1_contact_update = createAsyncThunk(
  "contacts/api_v1_contact_update",
  async payload => {
    const response = await apiService.api_v1_contact_update(payload)
    return response.data
  }
)
export const api_v1_contact_partial_update = createAsyncThunk(
  "contacts/api_v1_contact_partial_update",
  async payload => {
    const response = await apiService.api_v1_contact_partial_update(payload)
    return response.data
  }
)
export const api_v1_contact_delete = createAsyncThunk(
  "contacts/api_v1_contact_delete",
  async payload => {
    const response = await apiService.api_v1_contact_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_contact_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contact_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contact_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contact_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contact_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contact_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contact_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contact_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_contact_list,
  api_v1_contact_create,
  api_v1_contact_read,
  api_v1_contact_update,
  api_v1_contact_partial_update,
  api_v1_contact_delete,
  slice: contactsSlice
}
