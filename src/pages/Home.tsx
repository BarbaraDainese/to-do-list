import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ListItem, OrderedList } from "@chakra-ui/react";
import { Item } from "../types/item";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  console.log("taskName");

  const [task, setTask] = useState("");
  const [editedItem, setEditedItem] = useState("");

  const [taskList, setTaskList] = useState<Item[]>([
    { name: "Cortar cabelo" },
    { name: "Levar cachorro para passear" },
    { name: "Comprar pão" },
  ]);

  const onSubmit = (data: any) => {
    console.log(data);
    let newList = [...taskList];
    newList.push({ name: data.taskName });
    setTaskList(newList);
    setTask(data.taskName);
  };

  const handleDelete = (item: Item) => {
    let deletedList = taskList.filter((i) => {
      return i !== item;
    });
    setTaskList(deletedList);
  };

  const handleEdit = (item: Item) => {
    setEditedItem(item.name);
  };

  // const handleDelete = (item: Item) => {
  //   let deletedList = [] as Item[];
  //   taskList.forEach((i) => {
  //     if (i !== item) {
  //       deletedList.push(i);
  //     }
  //   });
  //   setTaskList(deletedList);
  // };

  // const handleDelete = (itemToDelete: Item) => {
  //   let deletedList = [] as Item[];
  //   for (let i = 0; i < taskList.length; i++) {
  //     if (taskList[i] !== itemToDelete) {
  //       deletedList.push(taskList[i]);
  //     }
  //   }

  //   setTaskList(deletedList);
  // };

  // FOR IN:
  // let notas = [80, 75, 90, 65, 95, 100, 85]
  // let aprovados = 0;
  // let reprovados = 0;

  // for (var n in notas){
  //   console.log(notas[n])
  // };

  // for (var x of notas){
  //   console.log(x)
  // }

  // for (var y of notas){
  //   y>65? aprovados++ : reprovados++;
  // }
  // console.log("aprovados:" + aprovados);
  // console.log("reprovados:" + reprovados);

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Tarefa</FormLabel>

          <Input {...register("taskName")} type="text" />
          <Button type="submit">Salvar</Button>
        </FormControl>
      </form>
      <OrderedList>
        {taskList.map((item, index) => (
          <ListItem key={index}>
            {item.name}
            <Button
              colorScheme="teal"
              variant="solid"
              size="xs"
              onClick={() => handleDelete(item)}
            >
              <DeleteIcon />
            </Button>

            <Button
              colorScheme="teal"
              variant="solid"
              size="xs"
              onClick={() => handleEdit(item)}
            >
              <EditIcon />
            </Button>
          </ListItem>
        ))}
      </OrderedList>

      <Link to="about">About</Link>
    </div>
  );
};

export default Home;
