'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { isCompletedSchema, todoSchema } from '@/schemas/todo'
import { StateType } from '@/types/state.type'

export async function createTodo(
  _prevState: StateType,
  formData: FormData) {
  const parsed = todoSchema.safeParse({
    name: formData.get('name'),
  })

  if (!parsed.success) {
    const state: StateType = {
      status: 'error',
      message: parsed.error.issues[0].message,
    }

    return state
  }

  await prisma.todo.create({ data: { name: parsed.data.name } })
  revalidatePath('/')

  const state: StateType = {
    status: 'success',
    message: 'Задача успешно создана!'
  }

  return state
}

export async function updateTodo(
  id: number,
  _prevState: StateType,
  formData: FormData
) {
  const parsed = todoSchema.safeParse({ name: formData.get('name') })

  if (!parsed.success) {
    const state: StateType = {
      status: 'error',
      message: parsed.error.issues[0].message,
    }

    return state
  }

  await prisma.todo.update({
    where: { id },
    data: { name: parsed.data.name },
  })
  revalidatePath('/')

  const state: StateType = {
    status: 'success',
    message: 'Задача обновлена!',
  }

  return state
}

export async function toggleTodo(
  id: number,
  _prevState: StateType,
  formData: FormData
) {
  const parsed = isCompletedSchema.safeParse({
    isCompleted: formData.get('isCompleted'),
  })

  if (!parsed.success) {
    const state: StateType = {
      status: 'error',
      message: 'Ошибка обновления задачи!',
    }

    return state
  }

  await prisma.todo.update({
    where: { id },
    data: { isCompleted: parsed.data.isCompleted },
  })

  revalidatePath('/')

  const state: StateType = {
    status: 'success',
    message: parsed.data.isCompleted
      ? 'Задача выполнена!'
      : 'Задача отмечена как невыполненная',
  }

  return state
}

export async function deleteTodo(
  id: number,
  _prevState: StateType
): Promise<StateType> {
  try {
    await prisma.todo.delete({ where: { id } })
    revalidatePath('/')

    return {
      status: 'success',
      message: 'Задача удалена!',
    }
  } catch (e) {
    return {
      status: 'error',
      message: 'Ошибка при удалении задачи',
    }
  }
}
