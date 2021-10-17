import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_threadmember_list = createAsyncThunk(
  "threadMembers/api_v1_threadmember_list",
  async payload => {
    const response = await apiService.api_v1_threadmember_list(payload)
    return response.data
  }
)
export const api_v1_threadmember_create = createAsyncThunk(
  "threadMembers/api_v1_threadmember_create",
  async payload => {
    const response = await apiService.api_v1_threadmember_create(payload)
    return response.data
  }
)
export const api_v1_threadmember_read = createAsyncThunk(
  "threadMembers/api_v1_threadmember_read",
  async payload => {
    const response = await apiService.api_v1_threadmember_read(payload)
    return response.data
  }
)
export const api_v1_threadmember_update = createAsyncThunk(
  "threadMembers/api_v1_threadmember_update",
  async payload => {
    const response = await apiService.api_v1_threadmember_update(payload)
    return response.data
  }
)
export const api_v1_threadmember_partial_update = createAsyncThunk(
  "threadMembers/api_v1_threadmember_partial_update",
  async payload => {
    const response = await apiService.api_v1_threadmember_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_threadmember_delete = createAsyncThunk(
  "threadMembers/api_v1_threadmember_delete",
  async payload => {
    const response = await apiService.api_v1_threadmember_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const threadMembersSlice = createSlice({
  name: "threadMembers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_threadmember_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_threadmember_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_threadmember_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_threadmember_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_threadmember_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_threadmember_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_threadmember_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_threadmember_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_threadmember_list,
  api_v1_threadmember_create,
  api_v1_threadmember_read,
  api_v1_threadmember_update,
  api_v1_threadmember_partial_update,
  api_v1_threadmember_delete,
  slice: threadMembersSlice
}
