import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
    apiKey:  import.meta.env.VITE_OPENAI_KEY
});

export const openai = new OpenAIApi(configuration);