const hormone = {
    actor: 'Win',
    actress: 'Kwan',
    extraPlayer: 'Dao',
    firstEvent: function() {
        console.log(`${this.actor} is intereested in  ${this.actress}`) ;
      }
}
const hm1 = hormone;
hm1.actor = 'Tar';   

for (const hm in hm1) {
    console.log(`${hm}: ${hm1[hm]}`);
    }

let a = hm1.firstEvent();
console.log(a);
