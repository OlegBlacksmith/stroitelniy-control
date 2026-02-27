export default interface Email {
  name: string;
  email: string;
  connectionType: 'Phone' | 'Email';
  phone?: string;
}
