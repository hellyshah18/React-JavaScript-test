import { Incre } from "../action/counteraction";

import { takeLatest, delay, put } from 'redux-saga/effects'


function* asycINC()
{
    yield delay(2000);
    yield put(Incre());
}

export function* watchINC()
{
    yield takeLatest('INC_ASYC',asycINC)
}