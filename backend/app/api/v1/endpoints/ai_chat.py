from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = "default"

class ChatResponse(BaseModel):
    reply: str
    recommended_companies: List[str] = []

@router.post("/chat", response_model=ChatResponse)
def ai_chat(payload: ChatRequest):
    user_msg = payload.message.lower()
    
    # Lógica de recomendação RAG (simulada com dados verificados conforme diretriz do projeto)
    if "pizza" in user_msg or "massa" in user_msg or "comer" in user_msg:
        return ChatResponse(
            reply="Para saborear pizzas e massas excelentes em Porto de Galinhas, recomendo a **Pizzaria da Hora**. Eles possuem ambiente familiar e opção de cupom de desconto com o código TOURLY15!",
            recommended_companies=["Pizzaria da Hora"]
        )
    elif "mergulho" in user_msg or "praia" in user_msg or "passeio" in user_msg:
        return ChatResponse(
            reply="Para mergulho seguro nas piscinas naturais, recomendo a **Submerso Scuba Diver**. Eles oferecem acompanhamento de instrutores credenciados e fotos subaquáticas.",
            recommended_companies=["Submerso Scuba Diver"]
        )
    elif "cerveja" in user_msg or "bar" in user_msg or "noite" in user_msg:
        return ChatResponse(
            reply="Para curtir a noite com música ao vivo e chopp gelado, a melhor opção é o **Pub & Café Beer Rock**!",
            recommended_companies=["Pub & Café Beer Rock"]
        )
    else:
        return ChatResponse(
            reply=f"Olá! Sou o assistente virtual do Tourly. Como posso te ajudar a aproveitar ao máximo sua estadia em Porto de Galinhas?",
            recommended_companies=[]
        )
