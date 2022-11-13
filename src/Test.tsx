import { API, DataStore } from "aws-amplify"
import { createSomethingA, createSomethingB } from "./graphql/mutations"
import { SomethingA, SomethingASomethingB, SomethingB } from "./models"

export function Test() {

  async function listUsingDataStore() {
    const dsA = await DataStore.query(SomethingA)
    const dsB = await DataStore.query(SomethingB)
    const dsAB = await DataStore.query(SomethingASomethingB)

    console.log({ dsA, dsB, dsAB })
  }

  async function _createSomethingA(name: string) {
    await API.graphql({
      query: createSomethingA, variables: {
        input: { name }
      }
    })
  }

  async function _createSomethingB(name: string) {
    await API.graphql({
      query: createSomethingB, variables: {
        input: {
          name
        }
      }
    })
  }

  async function createNewConnection() {
    const newSomethingA1 = await DataStore.save(new SomethingA({
      name: "abc1"
    }))
    const newSomethingA2 = await DataStore.save(new SomethingA({
      name: "abc2"
    }))

    const newSomethingB = await DataStore.save(new SomethingB({
      name: "def",
    }))

    const connection = await DataStore.save(new SomethingASomethingB({
      somethingA: newSomethingA1,
      somethingB: newSomethingB
    }))

    const connection2 = await DataStore.save(new SomethingASomethingB({
      somethingA: newSomethingA2,
      somethingB: newSomethingB
    }))



    console.log({ newSomethingA1, newSomethingA2, newSomethingB, connection, connection2 })
  }






  return <div className='flex gap-2 m-2'>
    <button onClick={() => _createSomethingA(`${Math.random()}`)} className='bg-slate-300'>Create A</button>
    <button onClick={() => _createSomethingB(`${Math.random()}`)} className='bg-slate-300'>Create B</button>
    <button className='bg-red-100' onClick={listUsingDataStore}>Button</button>
    <button className='bg-red-100' onClick={createNewConnection}>Button2</button>
  </div>
}