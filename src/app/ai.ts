


export class Ai {

    aiBits: string[] = [];
    num: number;
    generated: number[] = [];
    AIS_BITS: string[] = [
 'Rock', 'Paper', 'Scissors', 'Paper', 'Rock', 'Rock', 'Paper', 'Scissors', 'Paper', 'Rock'
];

    clearBits() {
        this.aiBits = [];
        this.generated = [];
    }

    generateAiBits() {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < 10; i++) {
       this.generated.push(this.num = Math.floor((Math.random() * 3) + 1));
      }

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < 10; i++) {
        if (this.generated[i] ===  1) {
        this.aiBits.push('Rock');
        }
        if (this.generated[i] ===  2) {
        this.aiBits.push('Paper');
        }
        if (this.generated[i] ===  3) {
        this.aiBits.push('Scissors');
        }
    }
  }
}
