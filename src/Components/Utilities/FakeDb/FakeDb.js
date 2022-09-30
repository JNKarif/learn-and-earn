


const addToDb = (event) => {

    localStorage.setItem('break-time', JSON.stringify(event.target.innerText))
}

export { addToDb }