import {
  Table as TableChakra,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Tooltip,
  Text,
  Flex,
} from "@chakra-ui/react";

type tableData = {
  posicao: number;
  pontos: number;
  time: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  aproveitamento: number;
  variacao_posicao: number;
  ultimos_jogos: Array<string>;
};

interface TableProps {
  source: tableData[];
  name: string;
};

const Table = ({ source, name }: TableProps) => {
  return (
    <TableChakra>
      <TableCaption>{name}</TableCaption>
      <Thead>
        <Tr>
          <Th>
            <Tooltip label="Classificação" aria-label="Classificação" tooltip>Classificação</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Pontos" aria-label="Pontos" tooltip>P</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Jogos" aria-label="Jogos" tooltip>J</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Vitórias" aria-label="Vitórias" tooltip>V</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Empates" aria-label="Empates" tooltip>E</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Derrotas" aria-label="Derrotas" tooltip>D</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Gols Prós" aria-label="Gols Prós" tooltip>GP</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Gols Contras" aria-label="Gols Contras" tooltip>GC</Tooltip>
          </Th>
          <Th isNumeric>
            <Tooltip label="Saldo de Gols" aria-label="Saldo de Gols" tooltip>SG</Tooltip>
          </Th>
          <Th>
            <Tooltip label="Aproveitamento" aria-label="Aproveitamento" tooltip>%</Tooltip>
          </Th>
          <Th>
            <Tooltip label="Últimos Jogos" aria-label="Últimos Jogos" tooltip>Últ.Jogos</Tooltip>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {source.map(table => (
          <Tr key={table.posicao}>
            <Td>
              <Text as="strong" mr={4}>{table.posicao}</Text>
              {table.time.nome_popular}
            </Td>
            <Td isNumeric>{table.pontos}</Td>
            <Td isNumeric>{table.jogos}</Td>
            <Td isNumeric>{table.vitorias}</Td>
            <Td isNumeric>{table.empates}</Td>
            <Td isNumeric>{table.derrotas}</Td>
            <Td isNumeric>{table.gols_pro}</Td>
            <Td isNumeric>{table.gols_contra}</Td>
            <Td isNumeric>{table.saldo_gols}</Td>
            <Td isNumeric>{table.aproveitamento}</Td>
            <Td isNumeric>
              <Flex>
                {table.ultimos_jogos.map(jogo => {
                  if (jogo === 'v') {
                    return <Text as="span" fontSize={60} color="green.500">.</Text>
                  } else if (jogo === 'e') {
                    return <Text as="span" fontSize={60} color="gray.500">.</Text>
                  } else if (jogo === 'd') {
                    return <Text as="span" fontSize={60} color="red.500">.</Text>
                  }
                })}
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </TableChakra>
  );
};

export default Table;
