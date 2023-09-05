export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      images: {
        Row: {
          altText: string
          filename: string
          folder: string
          id: string
          isFavorite: boolean
        }
        Insert: {
          altText: string
          filename: string
          folder: string
          id: string
          isFavorite?: boolean
        }
        Update: {
          altText?: string
          filename?: string
          folder?: string
          id?: string
          isFavorite?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
