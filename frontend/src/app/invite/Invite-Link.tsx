"use client"

import IconButton from '@/components/Icon-Button'
import { InputRoot, InputIcon, InputField } from '@/components/Input'
import { Link, Copy } from 'lucide-react'
import React from 'react'

export default function InviteLinkInput({inviteLink}:{inviteLink:string}) {

    function handleInviteLinkClick (){
        navigator.clipboard.writeText(inviteLink)
    }

  return (
    <InputRoot>
    <InputIcon>
      <Link className="size-5" />
    </InputIcon>
    <InputField
      readOnly
      defaultValue={inviteLink}
    />
    <IconButton className="-mr-2" onClick={handleInviteLinkClick}>
      <Copy className="size-5" />
    </IconButton>
  </InputRoot>
  )
}
