import { writable } from 'svelte/store';

function createStats() {
    const { subscribe, set, update } = writable(
        {
            brightness: {
                dark:0,
                bright:0
            },
            colour: {
                yellow:0,
                green:0,
                brown:0,
                black:0,
            },
            consistency: {
                rough:0,
                smooth:0,
            },
            embedded_obj: {
                yes:0,
                no:0,
            }
        }
    );

    return {
        subscribe,
        like: (image) => update(stat => {
            for(let quality in image){
                //stats[quality][image[quality]]['seen'] += 1;
                // stats[quality][image[quality]]['swiped'] +=1;
                stat[quality][image[quality]] += 1;
            }
            return stat;
        }),
        dislike: (image) => update(stat => { 
            // for(let quality in image){
            //     stats[quality][image[quality]]['seen'] += 1;
            // }
            return stat;
        }),
        reset: () => set({
            brightness: {
                dark:0,
                bright:0
            },
            colour: {
                yellow:0,
                green:0,
                brown:0,
                black:0,
            },
            consistency: {
                rough:0,
                smooth:0,
            },
            embedded_obj: {
                yes:0,
                no:0,
            }
        })
    }
}

export const stats = createStats();