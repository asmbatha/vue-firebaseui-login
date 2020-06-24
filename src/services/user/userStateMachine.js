import { Machine, assign } from 'xstate'
import { auth } from "@/firebase"

const config = {
    id: 'user',
    initial: 'starting',
    context: {
        user: null
    },
    states: {
        starting: {
            invoke: {
                src: () => (callback) => {
                    auth.onAuthStateChanged(user => callback({
                        type: 'CHANGED',
                        user
                    }))
                },
            },
            on: {
                CHANGED: [
                    {
                        target: 'no_user',
                        cond: (_, event) => !event.user,
                    },
                    {
                        target: 'authenticated',
                        actions: assign({
                            user: (_, event) => event.user
                        })
                    }
                ],
            }
        },
        no_user: {},
        authenticated: {
            invoke: {
                src: () => (callback) => {
                    auth.onAuthStateChanged(user => {
                        user || callback({
                            type: 'CHANGED',
                            user
                        })
                    })
                },
            },
            on: {
                CHANGED: [
                    {
                        target: 'no_user',
                        cond: (_, event) => !event.user,
                    },
                    {
                        actions: assign({
                            user: (_, event) => event.user
                        })
                    }
                ],
                SIGNOUT: {
                    actions: () => {
                        auth.signOut()
                    }
                }
            }
        }
    }
}

export const userStateMachine = Machine(config, {
    actions: {
    },
    services: {
    },
    guards: {
    }
})
