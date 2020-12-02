const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",
    // ghostClass: "fantasma"
    dragClass: "drag",

    onEnd: () => {
        console.log("bien");   
    },

    group: "lista-persona",
	store: {

        //------- GUARDAMOS EL ORDEN DE LA LISTA --------

		set: function (sortable) {
            var order = sortable.toArray();            
			localStorage.setItem(sortable.options.group.name, order.join('|'));
        },

        //------- OBTENEMOS EL ORDEN DE LA LISTA --------

        get: function (sortable) {
			var order = localStorage.getItem(sortable.options.group.name);
			return order ? order.split('|') : [];
		}
	}
});