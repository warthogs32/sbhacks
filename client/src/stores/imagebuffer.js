import {writable} from 'svelte/store';

function createImages() {
    const {subscribe, set, update} = writable([]);

    return {
        subscribe,
        buffer: () => update(arr => )
    }
}