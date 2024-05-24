import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Deletemem.css'
import { FaTrash } from 'react-icons/fa';
interface Member {
  id: number;
  name: string;
  keyword: string;
  isDoctorant: boolean;
  image: string;
}

const Deletemem: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get<Member[]>('http://localhost:8080/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const deleteMember = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/members/${id}`);
      setMembers(members.filter((member) => member.id !== id));
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div>
      <h1>Member List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Keyword</th>
            <th>Doctorant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.keyword}</td>
              <td>{member.isDoctorant ? 'Yes' : 'No'}</td>
              <td>
            <button onClick={() => deleteMember(member.id)} >     <FaTrash /> Delete</button>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deletemem;