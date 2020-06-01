# Overview

Engine Actions are to the RPG Engine what Redux Actions are to Redux.

An Engine Action describes a single discreet change in the state of the Engine.

While similar to Redux Actions, Engine Actions are not a one-to-one mapping with the Engine's internal Redux actions. A single Engine action could trigger any number of Redux actions (including zero), and/or other non-Redux actions within the Engine.

# Imperative vs Declarative

Engine Actions effectively work like instructions so, on their own, they work imperatively. Imperative development can leave a lot of room for human error in some scenarios, so in order to support more declarative programming practices, the Engine library should also provide utilities to abstract away more error prone uses for Engine Actions.
