export const getQuote = async () => {
    try {
      const gptApiKey = process.env.GPT_API_KEY;
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${gptApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: 'Generate a motivational quote for a quiz participant.',
          max_tokens: 60
        })
      });
  
      const data = await response.json();
      return data.choices[0].text.trim();
    } catch (error) {
      return 'Great job! Keep up the good work!';
    }
  };
  