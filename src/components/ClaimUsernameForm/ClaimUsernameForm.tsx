import { Button, TextInput, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormAnnotation } from '../Form/FormAnnotation/FormAnnotation'
import { Form } from '../Form/Form'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username precisa ter pelo menos 3 caracteres' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username pode ter apenas letras e hífens',
    })
    .transform((username) => username.toLowerCase()),
})

type CLaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CLaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: CLaimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
      <Form
        sx={{
          display: 'grid',
          gap: '$2',
          marginTop: '$4',
          padding: '$4',
          gridTemplateColumns: { xs: '1fr', sm: '1fr auto' },
        }}
        onSubmit={handleSubmit(handleClaimUsername)}
      >
        <TextInput
          crossOrigin={ClaimUsernameForm}
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar usuário
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}
