import { Notify } from 'quasar'
export default {
    verifySizeFlavor(data) {
        let itens = Object.values(data);
        itens.forEach(element => {
            if (element == null || element == '') {
                Notify.create({
                    message: 'Por favor, verifique novamente sua seleção!',
                    timeout: 2500, type: 'negative', position: 'top'
                })
                throw TypeError("Por favor, verifique novamente sua seleção!");
            }
        });
    }
}