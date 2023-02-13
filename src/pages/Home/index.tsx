import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { useSpeechSynthesis } from 'react-speech-kit';
import axios from "axios";
import { openai } from "../../config/openai";

export function Home() {
  const [text, setText] = useState('')
  const {speak, isPlaying} = useSpeechSynthesis()
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = async () => {
    setIsLoading(true)
    try {
      // // // console.log(text)
      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: text,
        temperature: 0.6,
        max_tokens: 150,
      });

      const responseText = completion.data.choices[0].text;
      await speak({text: responseText?.replace(/\r?\n|\r/g, " ")});
    } catch (error) {
      console.log(error);
    }
    setText('')
    setIsLoading(false)
  };

  return (
    <Container>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
        disabled={isPlaying || isLoading}
      />
      {
        isPlaying || isLoading?
          <button disabled>CARREGANDO...</button> 
        :
          <button onClick={handleClick}>Pesquisar</button>
      }
    </Container>
  )
}
