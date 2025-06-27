import { View, StyleSheet, FlatList } from "react-native"
import { useState, useEffect } from "react"
import Task from "../components/Task"

const taskDB = [
    {
        id: Math.random(),
        title: 'Senha do Banco',
        desc: 'Cartão Bradeco: senha: 123456',
        createDate: new Date(),
    },
    {
        id: Math.random(),
        title: 'Compras do Mercado',
        desc: 'Comprar: Laranja, banana',
        createDate: new Date(),
    },
    {
        id: Math.random(),
        title: 'Metas de Estudo',
        desc: 'Estudar para o concurso do banco',
        createDate: new Date(),
    },
]

export default function TaskList() {

    const [tasks, setTasks] = useState(taskDB)

    const taskDelete = id => {
        const tempTasks = tasks.filter(task => task.id !== id)
        setTasks(tempTasks)
    }
    useEffect(() => {

    }, [tasks])

    const toggleTask = taskId => {
        const taskList = [...tasks]
        taskList.forEach(task => {
            if (task.id === taskId) {
                task.createDate = task.createDate ? null : new Date()
            }
        });
        setTasks(taskList)
    }

    return (
            <View style={styles.container}>
                <View style={styles.taskList}>
                    <FlatList
                        data={tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} onToggleTask={toggleTask} onDelete={taskDelete} />}
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
})