import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "teamSlice",
  initialState: { teams: [] },
  reducers: {
    setTeams(state, action) {
      state.teams = action.payload;
    },
  },
});
const newsSlice = createSlice({
  name: "newsSlice",
  initialState: { news: [] },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});
const companyInfoSlice = createSlice({
    name: "companyInfoSlice",
    initialState: { companyInfo: [] },
    reducers: {
      setCompanyInfo: (state, action) => {
        state.companyInfo = action.payload;
      },
    },
  });
  const serviceSlice = createSlice({
    name: "service",
    initialState: { cervices: [] },
    reducers: {
      setServices: (state, action) => {
        state.cervices = action.payload;
      },
    },
  });
  const projectSlice = createSlice({
    name: "project",
    initialState: { projects: [] },
    reducers: {
      setProjects: (state, action) => {
        state.projects = action.payload;
      },
    },
  });
  const collaboratorSlice = createSlice({
    name: "collaborators",
    initialState: { collaborators: [] },
    reducers: {
      setCollaborators: (state, action) => {
        state.collaborators = action.payload;
      },
    },
  });
  const gallerySlice = createSlice({
    name: "gallery",
    initialState: { galleries: [] },
    reducers: {
      setGalleries: (state, action) => {
        state.galleries = action.payload;
      },
    },
  });

const store = configureStore({
  reducer: {
    team: teamSlice.reducer,
    news: newsSlice.reducer,
    companyInfo:companyInfoSlice.reducer,
    service:serviceSlice.reducer,
    project:projectSlice.reducer,
    collaborator:collaboratorSlice.reducer,
    gallery:gallerySlice.reducer
  },
});
export const actions = {
  teamAction: teamSlice.actions,
  newsAction: newsSlice.actions,
  companyInfoAction:companyInfoSlice.actions,
  serviceAction:serviceSlice.actions,
  projectAction:projectSlice.actions,
  collaboratorAction:collaboratorSlice.actions,
  galleryAction:gallerySlice.actions
};
export default store;
