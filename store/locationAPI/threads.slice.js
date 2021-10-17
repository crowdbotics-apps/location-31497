import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_thread_list = createAsyncThunk(
  "threads/api_v1_thread_list",
  async payload => {
    const response = await apiService.api_v1_thread_list(payload)
    return response.data
  }
)
export const api_v1_thread_create = createAsyncThunk(
  "threads/api_v1_thread_create",
  async payload => {
    const response = await apiService.api_v1_thread_create(payload)
    return response.data
  }
)
export const api_v1_thread_read = createAsyncThunk(
  "threads/api_v1_thread_read",
  async payload => {
    const response = await apiService.api_v1_thread_read(payload)
    return response.data
  }
)
export const api_v1_thread_update = createAsyncThunk(
  "threads/api_v1_thread_update",
  async payload => {
    const response = await apiService.api_v1_thread_update(payload)
    return response.data
  }
)
export const api_v1_thread_partial_update = createAsyncThunk(
  "threads/api_v1_thread_partial_update",
  async payload => {
    const response = await apiService.api_v1_thread_partial_update(payload)
    return response.data
  }
)
export const api_v1_thread_delete = createAsyncThunk(
  "threads/api_v1_thread_delete",
  async payload => {
    const response = await apiService.api_v1_thread_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const threadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_thread_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_thread_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_thread_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_thread_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_thread_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_thread_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_thread_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_thread_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_thread_list,
  api_v1_thread_create,
  api_v1_thread_read,
  api_v1_thread_update,
  api_v1_thread_partial_update,
  api_v1_thread_delete,
  slice: threadsSlice
}
