export class Customer {
constructor(cid?: number,
            name?: string,
            address?: string,
            contactno?: string) {}

            get cid() {
              return this.cid;
            }

            set cid(cid: number) {
              this.cid = cid;
            }

            get name() {
              return this.name;
            }

            set name(name: string) {
              this.name = name;
            }

            get address() {
              return this.address;
            }

            set address(address: string) {
              this.address = address;
            }

            get contactno() {
              return this.contactno;
            }

            set contactno(contactno: string) {
              this.contactno = contactno;
            }
}
