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
          AltText: string
          FileName: string
          Folder: string
          id: string
        }
        Insert: {
          AltText: string
          FileName: string
          Folder: string
          id: string
        }
        Update: {
          AltText?: string
          FileName?: string
          Folder?: string
          id?: string
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
