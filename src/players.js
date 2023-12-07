async function userAction() {
    const res = await fetch('https://www.balldontlie.io/api/v1/players' , {
        method: 'GET',
        headers: {
            'Content-type' : 'application/json'
            }
        })
    const myJson = await res.json()
    const myJson2 = await myJson.data

    // console.log(myJson2[0])
    return myJson2
  }

export default userAction;

