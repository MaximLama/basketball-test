import type Team from '@/api/dto/teams/Team'
import type TeamRequest from '@/api/dto/teams/TeamRequest'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { addTeam as addTeamRequest } from '@/api/teams/addTeam'
import { getTeam as getTeamRequest } from '@/api/teams/getTeam'
import type Player from '@/api/dto/players/Player'
import { getPlayers } from '@/api/players/getPlayers'
import { editTeam as editTeamRequest } from '@/api/teams/editTeam'
import { deleteTeam as deleteTeamRequest } from '@/api/teams/deleteTeam'

interface TeamsStore {
  [key: Team['id']]: Team & {
    players?: Player[]
  }
}

export const useTeamStore = defineStore('team', () => {
  const teams = ref<TeamsStore>({})

  const requestPlayers = async (teamId: number) => {
    const players = (await getPlayers({ teamIds: [teamId] })).data
    teams.value[teamId].players = players
  }

  const addTeam = async (team: TeamRequest) => {
    const data = await addTeamRequest(team)
    teams.value[data.id] = data

    await requestPlayers(data.id)
  }

  const getTeam = async (id: number) => {
    if (!(id in teams.value)) {
      const team = await getTeamRequest(id)
      teams.value[team.id] = team

      await requestPlayers(team.id)
    }

    return teams.value[id]
  }

  const editTeam = async (team: Team) => {
    const data = await editTeamRequest(team)
    teams.value[data.id] = data
    await requestPlayers(data.id)
  }

  const deleteTeam = async (id: number) => {
    await deleteTeamRequest(id)
    if (id in teams.value) {
      delete teams.value[id]
    }
  }

  return { teams, addTeam, getTeam, editTeam, deleteTeam }
})
