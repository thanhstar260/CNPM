// Import the functions you need from the SDKs you need
import { getDatabase } from 'firebase/database';
import app from './Firebase';

const database = getDatabase(app);

export default database;
