import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class AppService {
  async chatDavinci003(query): Promise<string> {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Human: ' + query?.text || '내용 없음',
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [' Human:', ' AI:'],
    });

    const answer_text = response?.data?.choices[0]?.text || '';

    const answer = answer_text.split(': ', 2)[1];

    return answer;
  }
}
