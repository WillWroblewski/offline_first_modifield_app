import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import * as RepositoryActions from "../repositories/actions";

export default function* addRepository({ repositoryName }) {

  alert(repositoryName)

  const response = yield call(api.get, `/repos/${repositoryName}`);

  alert(response)

  yield put(RepositoryActions.addRepositorySuccess(response.data));
}