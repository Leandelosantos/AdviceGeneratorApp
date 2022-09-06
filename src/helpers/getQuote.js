

export const getQuote = async() => {

    const url = 'https://api.adviceslip.com/advice'

    const resp = await fetch(url);
    const data = await resp.json();

    
    const quote = {
        id: data['slip'].id,
        advice: data['slip'].advice
    }; 

    return quote
}
