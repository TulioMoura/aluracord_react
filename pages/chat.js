import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    // Sua lógica vai aqui

    // ./Sua lógica vai aqui
    const [mensagem, setMensagem] = React.useState('')
    const [messageList, setMessageList]  = React.useState([])

    function handleMessageList(newMessage){
        const message = {
            from: 'tulio',
            id : "tulio"+Date.now(),
            message : newMessage,
        }
        setMessageList([message,...messageList])
                                    setMensagem('')
    }
    function deletehandl(id){
        
        setMessageList(messageList.filter(message => message.id != id))
        
    }
    
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://cdn.pixabay.com/photo/2017/12/16/11/47/waters-3022515_960_720.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                  <MessageList mensagem={messageList} deleteHandler={deletehandl} /> 
                    {/* lista de mensagens {messageList.map((actualMessage)=>{
                        return (
                            <li key = {actualMessage.id}>
                                {actualMessage.from}: {actualMessage.message}   
                            </li>
                        )
                    })} */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            placeholder="Insira sua mensagem aqui..."
                            value={mensagem}
                            type="textarea"
                            styleSheet={{
                                height:'100%',
                                width: '100%',
                                border:'0',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}

                            onChange ={(e)=>{
                                const value = e.target.value;
                                setMensagem(value)
                                
                            }} 

                            onKeyPress={(e)=>{
                                
                                if(e.key == 'Enter'){
                                    e.preventDefault();
                                    handleMessageList(mensagem)
                                }
                            }}
                        />

                        <Button 
                        label='Enviar!'
                        styleSheet={{
                            height: '100%',
                            width: '10%',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                
                                
                        }}
                        onClick={()=>{
                            
                            handleMessageList(mensagem)}}
                            
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList({mensagem,deleteHandler}) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >

            {
                mensagem.map((actualMessage)=>{
                    return(

                        <Text
                key={actualMessage.id}
                tag="li"
                styleSheet={{
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }
                }}
            >
                <Box
                    styleSheet={{
                        marginBottom: '8px',
                        display:"flex",
                        justifyContent:"space-between"
                    }}
                >
                    <Box>
                        <Image
                        styleSheet={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px',
                        }}
                        src={`https://github.com/TulioMoura.png`}
                    />
                    <Text tag="strong">
                        {actualMessage.from}
                    </Text>
                    <Text
                        styleSheet={{
                            fontSize: '10px',
                            marginLeft: '8px',
                            color: appConfig.theme.colors.neutrals[300],
                        }}
                        tag="span"
                    >
                        {(new Date().toLocaleDateString())}
                    </Text>
                    </Box>
                    
                    <Button
                styleSheet={{
                    margin:"0px",
                    padding :"0px",
                    backgroundColor:"#00000000",
                    hover:{
                        backgroundColor:"#00000000",
                        color:"#6e0910"
                    }
                }}
                    onClick={(e)=>{
                        deleteHandler(actualMessage.id)
                    }}
                label = "⨉"
              />
                </Box>
                {actualMessage.message}
                
            </Text>
                    )
                })
            }

            
        </Box>
    )
}