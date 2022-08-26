
let n = 0

function compteur(props) {
    return <h1>
        Nous sommes à <span>0</span> secondes depuis la dernière mise à jour.
    </h1>
}

ReactDOM.render(<compteur />, document.getElementById('root'))

// compteur()

// window.setInterval(()=>{
//     n++
//     compteur()
// }, 1000)