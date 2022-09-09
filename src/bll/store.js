const store = {
    _state : {
        dataProfile: {
            data: [
                {id: 0, text: "блаблабла1", likes: 21},
                {id: 1, text: "блаблабла", likes: 151},
                {id: 2, text: "блаблабла", likes: 56},
            ],
            newText: "",
        },
        dataDialog: {
            data: [
                {
                    id: 0, name: "Yuri", texts: [
                        {id: 0, text: "fas"},
                        {id: 1, text: "4234fas"},
                        {id: 2, text: "f645as"},
                    ]
                },
                {id: 1, name: "Ana", texts: [{id: 0, text: "asdfasdf"}]},
                {id: 2, name: "Dima", texts: [{id: 0, text: "fsadf"}]},
                {id: 3, name: "Ppp", texts: [{id: 0, text: "fa"}]},
                {id: 4, name: "Gold", texts: [{id: 0, text: "afsd"}]},
                {id: 5, name: "ISJFDLij", texts: [{id: 0, text: "sfdsafdffasdf"}]},
                {id: 6, name: "sdf", texts: [{id: 0, text: "sfdfa32asdfssdf"}]},
                {
                    id: 7, name: "Yuri2", texts: [
                        {id: 0, text: "fas"},
                        {id: 1, text: "4234fas"},
                        {id: 2, text: "f645as"},
                    ]
                },
                {
                    id: 8, name: "Ana2", texts: [
                        {id: 0, text: "fas"},
                        {id: 1, text: "4234fas"},
                        {id: 2, text: "f645as"},
                        {id: 3, text: "привет юра"},
                    ]
                },
            ],
            newText: "",
        },
    },
    _reRenderApp() {},

    getState() {
        return this._state
    },
    addInfo(text, dataState) {
        let data
        let root
        let a
        switch (dataState.page) {
            case "Profile" :
                root = this._state.dataProfile;
                data = root.data;
                a = 1 // для добавления в push свойства likes
                break;
            case "Dialog" :
                root = this._state.dataDialog;
                data = root.data[dataState.id].texts;
                break;
        }

        const pushInfo = (x) => {

            const idMax = Math.max(...x.map(el => el.id))

            const newInfo = {
                id: idMax + 1, text: text,
            };
            if (a === 1) {newInfo.likes = 0} // если а=1, то добавляется дополнительное свойство likes

            x.push(newInfo);
            root.newText = ""
        }

        pushInfo(data, root)

        this._reRenderApp(this._state)

    },
    setInfo(text, dataState) {
        switch (dataState.page) {
            case "Profile" :
                this._state.dataProfile.newText = text;
                break;
            case "Dialog" :
                this._state.dataDialog.newText = text;
                break;
        }

        this._reRenderApp(this._state)
    },
    subscribe(observer) {
        this._reRenderApp = observer //observer - паттерн js
    },
}

export default store

