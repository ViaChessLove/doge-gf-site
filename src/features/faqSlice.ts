import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { faqs } from '../data/FaqData';
import { FaqContent } from './../data/FaqData';

interface FaqSliceInterface {
    values: FaqContent[]
}

const initialState: FaqSliceInterface = {
    values: faqs
}

export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        openFaq: (state: any, action: PayloadAction<FaqContent>) => {
            state.values.forEach((faq: FaqContent) => {
                if (faq.id === action.payload.id) {
                    faq.isShow = true;
                } else {
                    faq.isShow = false;
                }
            })
        },
        closeFaq: (state: any, action: PayloadAction<FaqContent>) => {
            state.values.forEach((faq: FaqContent) => {
                if (faq.id === action.payload.id) {
                    faq.isShow = false;
                }
            })
        }
    }
});

export const {openFaq, closeFaq} = faqSlice.actions;
export default faqSlice.reducer;