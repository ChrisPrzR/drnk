const Error404 = (e) => {
    const view = `
        <div class="Error404">
        <p>Page not found ${e}</p>
        </div>
    `
    return view
}

export default Error404