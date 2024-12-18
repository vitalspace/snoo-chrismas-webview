{
    __sveltekit_hn74vw = {
        base: new URL(".", location).pathname.slice(0, -1)
    };

    const element = document.currentScript.parentElement;

    Promise.all([
        import("./_app/immutable/entry/start.B6o6bCm2.js"),
        import("./_app/immutable/entry/app.CqNYUx8X.js")
    ]).then(([kit, app]) => {
        kit.start(app, element, {
            node_ids: [0, 2],
            data: [null,null],
            form: null,
            error: null
        });
    });
}