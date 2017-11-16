class View {

    get home() {
        return Promise.resolve(`<h1>Home page</h1>`)
    }
    get test() {
        return Promise.resolve(`<h1>Test page</h1>`)
    }
    
}