import { interpret } from 'xstate'
import Vue from 'vue'

export default class VueXstate {
    constructor (machine) {
        /**
         * Vue obsevable containing xstate's current
         * "state value" and
         * Xstate context
        */
        this.state = Vue.observable({
            value: null,
            context: {}
        })
        
        /**
         * instance of the Xstate service
        */
        this.service = machine
            ? interpret(machine)
                .onTransition(state => {
                    Vue.set(this.state, 'value', state.value)
                    Vue.set(this.state, 'context', state.context)
                })
            : {
                start(){},
                onTransition (){}
            }
    }
}
